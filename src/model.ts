type Primitives = "null" | "boolean" | "int" | "long" | "float" | "double" | "bytes" | "string"
type RecordType = "record"
type EnumType = "enum"
type ArrayType = "array"
type MapType = "map"
type FixedType = "fixed"
type Complexes = RecordType | EnumType | ArrayType | MapType | FixedType
type Derived = string

interface Schema<T = string> {
    type: T
    name: string
}

interface Primitive extends Schema<Primitives> {}

interface Enums extends Schema<EnumType>{
    aliases?: string
    doc?: string
    symbols: Array<string>
    default?: string
}

interface Records extends Schema<RecordType>{
    namespace?: "string"
    doc?: "string"
    order?: "descending" | "ascending" | "ignore"
    aliases?: Array<string>
    fields: Array<Field>
}

interface Arrays<T = Primitives | Complexes> extends Schema<ArrayType> {
    items: T
    default: []
}

interface Maps extends Schema<MapType> {
    values: string
    default: {}
}

type Unions<T = Primitives | Complexes> = Array<T>

interface Fixed extends Schema<FixedType> {
    size: number
    namespace?: string
    aliases?: string
}

interface Field {
    name: string
    type: Fixed | Maps | Arrays | Records | Enums | Primitive
}

type AvroObject = Fixed | Maps | Arrays | Records | Enums | Primitive