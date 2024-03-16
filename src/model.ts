type Primitives = "null" | "boolean" | "int" | "long" | "float" | "double" | "bytes" | "string"
type RecordType = "record"
type EnumType = "enum"
type ArrayType = "array"
type MapType = "map"
type FixedType = "fixed"
type Complexes = RecordType | EnumType | ArrayType | MapType | FixedType
type Derived = string
type ClassType = 'class' | 'record'
type Visibility = "private" | "public"
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
    classType?: ClassType
    methods?: Array<string>  
    visibility?: Visibility
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
    key: string
    value: string
    default?: Record<string, string>
}

type Unions<T = Primitives | Complexes> = Array<T>

interface Fixed extends Schema<FixedType> {
    size: number
    namespace?: string
    aliases?: string
}

interface Field {
    name: string
    type: Fixed | Maps | Arrays | Records | Enums | Primitive | Complexes | Primitives | string
}

type AvroObject = Fixed | Maps | Arrays | Records | Enums | Primitive

