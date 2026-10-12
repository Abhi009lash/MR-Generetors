import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';
import nodemailer from 'nodemailer';

/**
 * Custom Vite Plugin to provide local /api/contact endpoint powered by Nodemailer.
 */
function contactNodemailerPlugin(): Plugin {
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

              let previewUrl: string | false = false;
              try {
                const testAccount = await nodemailer.createTestAccount().catch(() => null);
                const transporter = testAccount
                  ? nodemailer.createTransport({
                      host: 'smtp.ethereal.email',
                      port: 587,
                      secure: false,
                      auth: {
                        user: testAccount.user,
                        pass: testAccount.pass,
                      },
                    })
                  : nodemailer.createTransport({
                      streamTransport: true,
                      newline: 'windows',
                    });

                const info = await transporter.sendMail({
                  from: '"MR Generators Dispatch" <dispatch@mrgenerators.com>',
                  to: 'info@mrgenerators.com, sales@mrgenerators.com',
                  replyTo: data.corporateEmail,
                  subject: `[DISPATCH REQUEST] ${data.requirementClassification || 'General'} - ${data.fullNameAndDesignation || 'Client'}`,
                  html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #00163D; border-radius: 4px;">
                      <div style="background-color: #00163D; padding: 12px 16px; color: white; margin: -20px -20px 20px -20px;">
                        <h2 style="margin: 0; font-size: 18px;">M.R GENERATORS - TECHNICAL DISPATCH LOG</h2>
                      </div>
                      <p><strong>Reference ID:</strong> ${refId}</p>
                      <hr style="border: 0; border-top: 1px solid #eee;" />
                      <p><strong>Contact Person & Designation:</strong> ${data.fullNameAndDesignation || 'N/A'}</p>
                      <p><strong>Corporate Email:</strong> ${data.corporateEmail || 'N/A'}</p>
                      <p><strong>Mobile / WhatsApp:</strong> +91 ${data.mobileNumber || 'N/A'}</p>
                      <p><strong>Requirement Classification:</strong> ${data.requirementClassification || 'N/A'}</p>
                      <p><strong>Preferred Engine Platform:</strong> ${data.preferredEnginePlatform || 'Standard OEM Recommendation'}</p>
                      <p><strong>Site Location & Load Specifications:</strong><br />${data.siteLocationAndLoadSpecs || 'N/A'}</p>
                      <p><strong>WhatsApp PDF Datasheet Opt-In:</strong> ${data.whatsappPdfOptIn ? 'YES (Confirmed)' : 'NO'}</p>
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
export default defineConfig({
  plugins: [react(), contactNodemailerPlugin()],
});
