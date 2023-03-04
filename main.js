import './style.css'
import copy from './copy.svg'
import { setupPassword } from './script'

document.querySelector('#app').innerHTML = `
  <div class = 'wrapper'>
  <div class="container">

  <h1>Password Generator</h1>

  <div class="display-container">

      <input readonly placeholder="Password" class="display" data-passwordDisplay>

      <button class="copyBtn" data-copy>
          <span class="tooltip" data-copyMsg></span>
          <img src="${copy}"  alt="copy" width="23" height="23" />
      </button>

  </div>


  <div class="input-container">

      <!--password length section-->
      <div class="length-container">
          <p>Password Length</p>
          <p data-lengthNumber>0</p>
      </div>
      
      <!--slider-->
      <input type="range" min="1" max="20" class="slider" step="1" data-lengthSlider>

      <!-- checkboxes-->
      <div class="checkbox-container">
          <label for="uppercase">Includes Uppercase letters</label>
          <input type="checkbox" id="uppercase">
      </div>

      <div class="checkbox-container">
          <label for="lowercase">Includes Lowercase letters</label>
          <input type="checkbox" id="lowercase">
      </div>

      <div class="checkbox-container">
          <label for="numbers">Includes Numbers </label>
          <input type="checkbox" id="numbers">
      </div>

      <div class="checkbox-container">
          
          <label for="symbols">Includes Symbols </label>
          <input type="checkbox" id="symbols">
      </div>

      <!-- strength section-->
      <div class="strength-container">
          <p>Strength</p>
          <div class="indicator" data-indicator></div>
      </div>

      <!-- generate password-->
      <button class="btn btn-large" id="generate">Generate Password</button>

  </div>
    
  </div>
`

setupPassword(document.querySelector('#generate'))