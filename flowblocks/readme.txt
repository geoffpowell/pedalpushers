Flowblocks notes:

Currently not being used:

footer_*.ini  (all footer_whatever files)
header.ini

These files above and their associated html templates/blocks html files were attempts to create flowblock models to use on the homepage, so that the user could update the header and footer there (from the homepage in the admin) and it would update across all templates. It turns out that it doesn't work that way because the homepage template does not render the actual {{ this.whatever }} variable. The statement gets extended to the other templates. In other words, the other templates try to read {{ this.whatever }} and it has a different meaning (maybe a different namespace? ) across the templates because 'this' refers to the template's own model, not the model where the statement was originally written. If there will be more development on this theme, I will have to find a different way to allow the user to change header and footer content.