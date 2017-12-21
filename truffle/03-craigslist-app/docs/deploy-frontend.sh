
# Copy contents of "src" directory in "docs" directory
rsync -r src/ docs/

# Copy our contract json in "docs" directory
rsync build/contracts/Craigslist.json docs/

git add .
git commit -m "Adding frontend files to Github Pages"
git push
