import { useRouter } from 'next/router'

function Pet() {
  const route = useRouter()
  const { filters } = route.query
  return <div>{JSON.stringify(filters)}</div>
}

export default Pet
