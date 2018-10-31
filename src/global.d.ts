
interface Company {
  label: string,
  url: string
}

interface State {
  firstname: string,
  lastname: string,
  role: string,
  email: string,
  phone: string,
  company: string
}

interface FieldData {
  key: string,
  value: string
}

interface FieldElement extends EventTarget {
  name: string,
  value: string
}

interface UpdateEvent extends Event {
  target: FieldElement
}
