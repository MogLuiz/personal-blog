export type ExcludeTypeProperty<T, K extends keyof T> = Omit<T, K>
