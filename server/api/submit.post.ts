import type { FormKind } from '~~/shared/types/forms'

export default defineEventHandler(async (event) => {
  const body = await readBody<{ kind: FormKind; data: Record<string, string> }>(event)
  const endpoint = process.env.VITE_FORMS_ENDPOINT || process.env.FORMS_ENDPOINT

  if (!endpoint) {
    // Short pause so loading indicator is perceivable before the honest message
    await new Promise((resolve) => setTimeout(resolve, 500))
    return {
      ok: false,
      status: 'not-configured',
      message: 'Online submissions are not connected yet.',
    }
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        form: body.kind,
        submittedAt: new Date().toISOString(),
        ...body.data,
      }),
    })

    if (!response.ok) {
      throw createError({
        statusCode: response.status,
        statusMessage: `Submission failed with status ${response.status}`,
      })
    }

    return { ok: true, status: 'success' }
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Submission failed',
    })
  }
})

