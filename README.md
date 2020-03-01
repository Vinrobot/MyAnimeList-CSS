# Vinrobot's CSS theme for MyAnimeList

MyAnimeList custom lists CSS

## How to use it

#### 1. Go to https://myanimelist.net/ownlist/style and switch template to `Modern` if not already selected

![Modern Templates](/assets/docs-listtemplates.png)

#### 2. Go to https://myanimelist.net/editprofile.php?go=listpreferences

The Your Anime List must be `Public` otherwise the covers won't be loaded.

The following columns must be enabled: `Numbers`, `Score`, `Type`, `Episodes` and `Image`

![Enabled Columns](/assets/docs-animecolumns.png)

#### 3. Go to https://myanimelist.net/ownlist/style/theme/1 and paste the code shown below in the Add Custom CSS field

```css
@\import "https://malscraper.azurewebsites.net/covers/auto/presets/dataimagelinkafter";
@\import "https://vinrobot.github.io/MyAnimeList-CSS/dist/Modern/Posters/main.css";
```

![Custom CSS Field](/assets/docs-addcustomcss.png)

## License
This project is licensed under the [MIT License](http://en.wikipedia.org/wiki/MIT_License).

## ToDo
- Display Cover Image
- Support Manga List
- Upload classic custom style
