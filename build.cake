#addin "nuget:?package=Cake.SquareLogo"

Task("Create-Icon").Does(() => {
    var settings = new LogoSettings {
        FontFamily = "Papyrus",
        FontSize = 50,
        Padding = 30,
        Foreground = "White",
        Background = "Green"
    };
    CreateLogo("Http", "images/icon.png", settings);
});

RunTarget("Create-Icon");