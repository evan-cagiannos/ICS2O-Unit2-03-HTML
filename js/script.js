// Copyright (c) 2020 Evan Cagiannos All rights reserved
//
// Created by: Evan Cagiannos
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * This function gets users first name and age and shows it back to user.
 */
function enterClicked() {
  // input
  const streetName = document.getElementById("street-name").value
  const streetNumber = parseInt(document.getElementById("street-number").value)

  // output
  document.getElementById("address").innerHTML =
    "Your info is: " + streetName + ", street-number " + streetNumber + "."
}
