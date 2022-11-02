// Created by: Mark Palfi
// Created on: Sep 2020
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of triangle.
 */
function calculate () {
  // input
  const lineA = parseInt(document.getElementById('length1-of-trapazoid').value)
  const lineB = parseInt(document.getElementById('length2-of-trapazoid').value)
  const height = parseInt(document.getElementById('height-of-trapazoid').value)

  // process
  const area = ((lineA * lineB) / 2) * (height)

  // output
  document.getElementById('area').innerHTML = "Area is: " + area + " cm²
}