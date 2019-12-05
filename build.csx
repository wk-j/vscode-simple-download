#r "nuget:wk.SquareLogo"

using SquareLogo;

var logo = new Logo();

var settings = new LogoSettings
{
    FontFamily = "Fira Code",
    FontSize = 50,
    NoSquare = true,
    Padding = 30,
    Foreground = "White",
    Background = "Green"
};

logo.CreateLogo("> HTTP", "images/logo.png", settings);