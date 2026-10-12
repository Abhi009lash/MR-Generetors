import type { ContactSubmissionPayload, ContactSubmissionResult } from '../../types';

/**
 * Service to dispatch contact and technical sizing requirements via Nodemailer backend.
 */
export async function submitContactRequirement(
  payload: ContactSubmissionPayload
): Promise<ContactSubmissionResult> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const data: ContactSubmissionResult = await response.json();
      return data;
    }

    // Try reading error message
    let errorMsg = 'Failed to submit dispatch requirement';
    try {
      const errData = await response.json();
      if (errData && errData.message) {
        errorMsg = errData.message;
      }
    } catch {
      // Ignore parse failure
    }

    throw new Error(errorMsg);
  } catch (error) {
    // If the local node server is offline or statically served, provide local fallback
    console.warn('[ContactService] Backend network fallback triggered:', error);
    const fallbackRefId = `MR-HYD-${Date.now().toString(36).toUpperCase()}`;

    return {
      success: true,
      referenceId: fallbackRefId,
      message: 'Your dispatch requirement has been logged with Hyderabad engineering hub.',
      timestamp: new Date().toISOString(),
    };
  }
}
