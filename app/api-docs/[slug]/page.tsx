import ApiDocsClient from '../../../components/ApiDocsClient'

export function generateStaticParams() {
  return [
    { slug: 'valid-jolli-api-yaml' }
  ]
}

export default async function ApiDocsPage(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  return <ApiDocsClient slug={params.slug} />
}
