$('#confirm').click(function(){
 $("#idget").val();
$('#name').text($("#idget").val());
});
$('#confirm2').click(function(){
 $("#idget2").val();
$('#name2').text($("#idget2").val());
});

$('#idclear').click(function(){
  $('#name,#name2').text('');
})

$('#focus')
.focus(function(){
$(this).css('backgroundColor','pink');
})
.blur(function(){
$(this).css('backgroundColor','white');
});

$('#select').change(function(){
alert('選択されました!');
});

$('#form1').submit(function(){
confirm('送信しますか？');
return false;
});


$('#form2').submit(function(){
  if($('#name3').val()==''&&($('textarea').val()=='')){
   $('#error-message').text('何でもいいから書いてね！！')
   }else if($('#name3').val() ==''){
   $('#error-message').text('名前を書いてね！');
   }else if($('textarea').val() ==''){
   $('#error-message').text('理由を書いてね！');
   } else{
   $('#error-message').text('ご協力ありがとうございます！');
   }
  return false;
 });

 $('input[type="checkbox"]').change(function(){
   $(':checked');alert('チェックされました') 
 });


$('#selecte').change(function(){
 if($(':selected')){
$('.selectbox').css('color','pink');
 }
 if($('#selecte').val()==''){
  $('#selectedForm').text('');
 }else{
  $('#selectedForm').text(`血液型は${$('#selecte').val()}です`);
 }
});
