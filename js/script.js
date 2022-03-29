// Created by: Mark Palfi
// Created on: Sep 2020
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of triangle.
 */
function calculate () {
  // input
  const A = parseInt(document.getElementById('length1-of-trapazoid').value)
  const B = parseInt(document.getElementById('length2-of-trapazoid').value)
  const C = parseInt(document.getElementById('length3-of-trapazoid').value)
  const height = parseInt(document.getElementById('height-of-trapazoid').value)

  // process
  const area = ("height-of-triangle" * height) / 2
  const perimeter = "length1-of-triangle" + "length2-of-trapazoid" + "length3-of-triangle"

  