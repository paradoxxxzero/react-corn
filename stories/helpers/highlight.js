import Prism from 'prismjs'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-jsx'
import 'prismjs/themes/prism.css'

export const highlight = (code, language) =>
  Prism.highlight(code, Prism.languages[language], language)
