import React from "react";

export default function CoolCompo({ dots = 2 }) {
  let wow = ''
  for (let ok of Array(parseInt(dots))) wow += '!'
  return <p>Ice cold ❄🧊 { wow }</p>
}