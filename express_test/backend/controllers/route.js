/**
 * Router
 * @param app
 */

      
module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('index.ejs', {
      title: ""
    });
  }).get('/conference', (req, res) => {
    res.render('examples/conference/index.ejs', {
      title: "- 1:1 화상수업"
    });
  }).get('/many', (req, res) => {
	  res.render('examples/many/index.html', {
		  title : "- 1:다 화상수업"
	  });
  })
};

