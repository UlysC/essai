import React from "react";

export default function CoolCompo({ dots = 2 }) {
  let wow = ''
  for (let i = 0; i <= dots; i++) wow += '!'
  return <p>Ice cold ❄🧊 { wow }</p>
}