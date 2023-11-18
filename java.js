let display = document.getElementById('display'); 
    let memory = ''; 
    
    function appendToDisplay(value) { 
      display.value += value; 
    } 
    
    function clearDisplay() { 
      display.value = ''; 
    } 
    
    function calculate() { 
      try { 
        display.value = eval(display.value); 
        memory = display.value; 
        document.getElementById('memory-display').innerHTML = memory;
      } catch (error) { 
        display.value = 'Error'; 
      } 
    } 
    
    function calculateSin() { 
      try { 
        display.value = Math.sin(eval(display.value)); 
        memory = display.value; 
        document.getElementById('memory-display').innerHTML = memory;
      } catch (error) { 
        display.value = 'Error'; 
      } 
    } 
    
    function calculateCos() { 
      try { 
        display.value = Math.cos(eval(display.value)); 
        memory = display.value; 
        document.getElementById('memory-display').innerHTML = memory;
      } catch (error) { 
        display.value = 'Error'; 
      } 
    } 
    
    function calculateSquare() { 
      try { 
        display.value = Math.pow(eval(display.value), 2); 
        memory = display.value; 
        document.getElementById('memory-display').innerHTML = memory;
      } catch (error) { 
        display.value = 'Error'; 
      } 
    } 
    
    function memoryRecall() { 
      display.value = memory; 
    }
    
    function clearMemory() {
      memory = '';
      document.getElementById('memory-display').innerHTML = '';
    }