export type Language = 'es' | 'en'

export interface Data<T> {
  data: Record<Language, T>
}