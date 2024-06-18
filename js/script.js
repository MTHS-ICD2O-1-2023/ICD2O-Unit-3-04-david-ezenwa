// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates volume.
 */
function fahrenheitToCelsius() {
  // input
  const temp = parseFloat(document.getElementById('temp').value)


  // process
  const tempInCelcius = 5 / 9 * (temp - 32)

  // output
  document.getElementById("temperature").innerHTML = 'The temperature in celcius is: ' + tempInCelcius.toFixed(3) + ' °C'
}
