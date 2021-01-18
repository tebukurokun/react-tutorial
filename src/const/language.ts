export const LANGUAGES = ["JavaScript", "C++", "Ruby", "Java", "PHP", "Go"]

export const getLanguages = (): Promise<Array<string>> => {
  return new Promise( ( resolve ) => {
    setTimeout( () => {
      resolve( LANGUAGES )
    }, 1000
    )
  } )
}
