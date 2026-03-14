function openEnroll(){
    // quick enroll action: open WhatsApp — replace number in the link inside HTML as needed
    window.open('https://wa.me/254790524398')
  }

  function clearForm(){
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('message').value='';
    document.getElementById('sendResult').textContent='';
  }

  function sendMessage(){
    const name=document.getElementById('name').value.trim();
    const email=document.getElementById('email').value.trim();
    const message=document.getElementById('message').value.trim();
    if(!name||!email||!message){document.getElementById('sendResult').textContent='Please fill all fields.';return}
    // For a live site, you'd POST this to your server. For this template we open WhatsApp prefill so the user can message directly.
    const text = encodeURIComponent(`Hello Sheddy, my name is ${name} (${email}). ${message}`);
    // Replace phone below (no +) with your number to enable WhatsApp from form
    const phone = '+254790524398';
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url,'_blank');
    document.getElementById('sendResult').textContent = 'Opening WhatsApp...';
  }