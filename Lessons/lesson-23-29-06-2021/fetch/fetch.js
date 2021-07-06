// Username
const userName = "Vahan11";

// Fields
const avatar = document.getElementById("avatar");
const bio = document.getElementById("bio");
const name = document.getElementById("name");
const country = document.getElementById("country");
const company = document.getElementById("company");

// Request
fetch(`https://api.github.com/users/${userName}`)
  // Parsing data
  .then((response) => response.json())
  // Filling the fields
  .then((user) => {
    let img = document.createElement("img");
    img.src = user.avatar_url;
    avatar.append(img);

    user.avatarUrl = user.avatar_url;
    bio.textContent = user.bio;
    name.textContent = user.name;
    country.textContent = user.location;
    company.textContent = user.company;
  });
