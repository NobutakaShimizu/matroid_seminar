// https://sli.dev/custom/config-katex.html
export default function setup() {
  return {
    macros: {
      '\\Real': '\\mathbb{R}',
      '\\Int': '\\mathbb{Z}',
      '\\Nat': '\\mathbb{N}',
      '\\bm': '\\boldsymbol',
      '\\norm': '\\left\\|#1\\right\\|',
      '\\abs': '\\left|#1\\right|',
      '\\set': '\\left\\{#1\\right\\}',
      '\\inner': '\\left\\langle#1\\right\\rangle',
      '\\rbra': '\\left(#1\\right)',
      '\\cbra': '\\left\\{#1\\right\\}',
      '\\sbra': '\\left[#1\\right]',
      '\\Pup': 'P^{\\uparrow}',
      '\\Pdown': 'P^{\\downarrow}',
      '\\PDU': 'P^{\\bigtriangledown}',
      '\\PUD': 'P^{\\triangle}',
      '\\nonlazyPUD': 'P^{\\land}',
    },
  }
} 