
document.querySelectorAll('td').forEach(cell => {
    const isStandartCell = !cell.classList.contains('given-number');
      if (isStandartCell){
        cell.addEventListener('click', onClickStandardCell);
      }
    });
  
  document.querySelectorAll('.number-control').forEach(numberControl =>{
    numberControl.addEventListener('click', onClickNumberControl);
  });
  
  function onClickStandardCell(){
    document.querySelector('.selected')?.classList?.remove('selected');
    this.classList.add('selected');
  }
  
  function onClickNumberControl() {
    const selectedCell = document.querySelector('.selected') //which is <td>
    if (selectedCell == null){
      return;
    }
  
    const clickedNumber = this.textContent;
    const isCandidateMove = document.getElementById('candidate-switch').checked;
      if (isCandidateMove){
        const candidatesNode = selectedCell.querySelector('.candidates'); //span candidates
        const candidates = candidatesNode.textContent.split(''); //array of numbers or empty array
        const numberIndex = candidates.indexOf(clickedNumber);
  
        if (numberIndex === -1){
          candidates.push(clickedNumber);
        } else {
          candidates.splice(numberIndex, 1)
        }
  
         candidatesNode.textContent = candidates.sort().join('');
      } else {
        selectedCell.querySelector('.value').textContent = clickedNumber;
      }
  }
  