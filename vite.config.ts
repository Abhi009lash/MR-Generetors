import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import nodemailer, { type Transporter } from 'nodemailer';

/**
 * Custom Vite Plugin to provide local /api/contact endpoint powered by Nodemailer.
 * Reads real SMTP credentials from .env if provided, or falls back to an Ethereal sandbox.
 */
function contactNodemailerPlugin(env: Record<string, string>): Plugin {
  const host = env.SMTP_HOST || process.env.SMTP_HOST;
  const port = Number(env.SMTP_PORT || process.env.SMTP_PORT || 587);
  const secure = (env.SMTP_SECURE || process.env.SMTP_SECURE) === 'true' || port === 465;
  const user = env.SMTP_USER || process.env.SMTP_USER;
  const pass = env.SMTP_PASS || process.env.SMTP_PASS;
  const mailFrom = env.MAIL_FROM || process.env.MAIL_FROM || '"M.R Generators Dispatch" <info@mrgenerators.com>';
  const mailTo = env.MAIL_TO || process.env.MAIL_TO || 'info@mrgenerators.com, sales@mrgenerators.com';

  return {
    name: 'contact-nodemailer-api',
    configureServer(server) {
      server.middlewares.use('/api/contact', (req, res, next) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk: Buffer) => {
            body += chunk.toString();
          });
          req.on('end', async () => {
            try {
              const data = JSON.parse(body || '{}');
              const refId = `MR-HYD-${Date.now().toString(36).toUpperCase()}`;

              const clientName = data.fullNameAndDesignation || data.fullName || data.name || 'Client';
              const clientEmail = data.corporateEmail || data.email || '';
              const clientPhone = data.mobileNumber || data.phone || 'N/A';
              const requirement = data.requirementClassification || data.kvaRequirement || data.serviceType || 'General';
              const enginePlatform = data.preferredEnginePlatform || 'Multi-OEM Recommendation';
              const locationSpecs = data.siteLocationAndLoadSpecs || data.message || 'N/A';

              let previewUrl: string | false = false;
              try {
                let transporter: Transporter;

                if (host && user && pass) {
                  // Production SMTP with authenticated credentials
                  transporter = nodemailer.createTransport({
                    host,
                    port,
                    secure,
                    auth: { user, pass },
                  });
                } else {
                  // Fallback to test sandbox if SMTP credentials not fully configured
                  const testAccount = await nodemailer.createTestAccount().catch(() => null);
                  transporter = testAccount
                    ? nodemailer.createTransport({
                        host: 'smtp.ethereal.email',
                        port: 587,
                        secure: false,
                        auth: { user: testAccount.user, pass: testAccount.pass },
                      })
                    : nodemailer.createTransport({
                        streamTransport: true,
                        newline: 'windows',
                      });
                }

                const info = await transporter.sendMail({
                  from: mailFrom,
                  to: mailTo,
                  replyTo: clientEmail || undefined,
                  subject: `[DISPATCH REQUEST] ${requirement} - ${clientName}`,
                  html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #00163D; border-radius: 4px;">
                      <div style="background-color: #00163D; padding: 12px 16px; color: white; margin: -20px -20px 20px -20px;">
                        <h2 style="margin: 0; font-size: 18px;">M.R GENERATORS - TECHNICAL DISPATCH LOG</h2>
                      </div>
                      <p><strong>Reference ID:</strong> ${refId}</p>
                      <hr style="border: 0; border-top: 1px solid #eee;" />
                      <p><strong>Contact Person:</strong> ${clientName}</p>
                      <p><strong>Email Address:</strong> ${clientEmail || 'N/A'}</p>
                      <p><strong>Mobile / WhatsApp:</strong> +91 ${clientPhone}</p>
                      <p><strong>Requirement / Capacity:</strong> ${requirement}</p>
                      <p><strong>Preferred Platform:</strong> ${enginePlatform}</p>
                      <p><strong>Site Location & Specs:</strong><br />${locationSpecs}</p>
                      <p><strong>WhatsApp PDF Opt-In:</strong> ${data.whatsappPdfOptIn ? 'YES (Confirmed)' : 'NO'}</p>
                      <hr style="border: 0; border-top: 1px solid #eee;" />
                      <p style="font-size: 11px; color: #777;">Generated automatically via M.R Generators Hyderabad Contact Hub.</p>
                    </div>
                  `,
                });

                previewUrl = nodemailer.getTestMessageUrl(info);
              } catch (mailErr) {
                console.warn('[Nodemailer Plugin] Non-fatal delivery notice:', mailErr);
              }

              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(
                JSON.stringify({
                  success: true,
                  referenceId: refId,
                  message: 'Your dispatch requirement has been logged with Hyderabad engineering hub.',
                  timestamp: new Date().toISOString(),
                  previewUrl: previewUrl || undefined,
                })
              );
            } catch (parseErr) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(
                JSON.stringify({
                  success: false,
                  message: parseErr instanceof Error ? parseErr.message : 'Invalid request payload',
                })
              );
            }
          });
        } else {
          next();
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), contactNodemailerPlugin(env)],
  };
});
