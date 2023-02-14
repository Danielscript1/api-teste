export interface IPaginacao<T> {
    count: number
    next: string
    previous: string
    content: T[]
}