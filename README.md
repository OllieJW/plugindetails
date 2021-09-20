## Plugin Details
Show your SpigotMC plugin in HTML

## How does it work?
Plugin Details uses an API called Spiget made by Inventivetalent to retrieve a plugins details in JSON form.

## So how do I use it on my plugin?
Plugin Details has two built in ways to get your details, a simple and a slightly more complicated way.<br>
**Note:** `pid` is the plugins ID.

### The easy version: 
```html
pid = searchParams.toString().replace("=", "");
```
This just uses the ? extention at the end of your URL to get the corrisponding SpigotMC resource.<br>
Example: https://example.com/details.html/12345 Spigot: https://spigotmc.org/resources/12345

### The slightly more complicated version:
```html
if (searchParams.has("plugin-name") === true) {
  pid = 12345;
}
else {
  window.location.href = "assets/invalid.html";
}
```
If someone uses ?plugin-name, it will use the id 12345. Using words in your URL is much easier to use and remember for later on.

If you need more help, come talk to me in Discord
https://discord.gg/tFhTcQ6yMn
