const generatehtml = (allElephants, allTigers, allSloths) => (
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>ZooBuilder</h1>
  
  <h3>Elephants</h3>
  <ul>
    ${allElephants.map(elephant => (`<li>${elephant.name}</li>\n`)).join('')}
  </ul>

  <h3>Tigers</h3>
  <ul>
    ${allTigers.map(tiger => (`<li>${tiger.name}</li>\n`)).join('')}
  </ul>

  <h3>Sloths</h3>
  <ul>
    ${allSloths.map(sloth => (`<li>${sloth.name}</li>\n`)).join('')}
  </ul>
</body>
</html>`
);

module.exports = generatehtml;