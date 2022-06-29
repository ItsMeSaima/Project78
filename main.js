var images = ["https://www.ixpap.com/images/2021/09/Krew-Wallpaper-6.jpg","https://preview.redd.it/84unrb93l0g71.jpg?width=400&format=pjpg&auto=webp&s=8a6dd6f7cb90cb6b944e6fcee7ce7edbe284eba5", "https://pbs.twimg.com/profile_images/1323411962974203904/BPwhfp-h_400x400.jpg" , "https://pbs.twimg.com/profile_images/1461904767639117829/QBGxrSVU_400x400.jpg", "https://biographymask.com/wp-content/uploads/2020/05/DraconiteDragon-1200x1200.jpg", "https://pbs.twimg.com/profile_images/1326338675295219712/TQKJYlSN_400x400.jpg"];
var names = ["Meet the ItsFunneh krew in real life","Kat aka Funneh 💙", "Kim aka Gold 💛", "Betty aka Rainbow 💗", "Allen aka Draco 💚", "Wenny aka Lunar 💜"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}

