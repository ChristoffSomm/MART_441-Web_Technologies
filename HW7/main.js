var artworkArry = new Array();

var artImg = ['img/painting0.jpg', 'img/painting1.jpg', 'img/painting2.jpg', 'img/painting3.jpg', 'img/painting4.jpg', 'img/painting5.jpg', 'img/painting6.jpg', 'img/painting7.jpg', 'img/painting8.jpg', 'img/painting9.jpg'];

class artworkFinderClass 
{
	constructor (Title, Author, Year, Description){
		this.Title = Title;
		this.Author = Author;
		this.Year = Year;
		this.Description = Description;
	}
	
	toStringTitle(){
		return this.Title;
	}
	toStringAuthor(){
		return "Artist: " + this.Author;
	}
	toStringYear(){
		return "Year: " + this.Year;
	}
	toStringDescription(){
		return "Description: " + this.Description;
	}
}

function initializeArray() {

	// I got the Images and Descriptions from - https://www.timeout.com/newyork/art/top-famous-paintings-in-art-history-ranked
	var aWork0 = new artworkFinderClass("Sunrise", "Claude Monet", "1874", "The defining figure of Impressionism, Monet virtually gave the movement its name with his painting of daybreak over the port of Le Havre, the artists hometown. Monet was known for his studies of light and color, and this canvas offers a splendid example with its flurry of brush strokes depicting the sun as an orange orb breaking through a hazy blue melding of water and sky.");
	var aWork1 = new artworkFinderClass("Mona Lisa", "Leonardo Da Vinci", "1503–19", "Painted between 1503 and 1517, Da Vinci’s alluring portrait has been dogged by two questions since the day it was made: Who’s the subject and why is she smiling? A number of theories for the former have been proffered over the years: That she’s the wife of the Florentine merchant Francesco di Bartolomeo del Giocondo (ergo, the work’s alternative title, La Gioconda); that she's Leonardo’s mother, Caterina, conjured from Leonardo's boyhood memories of her; and finally, that it's a self-portrait in drag. As for that famous smile, its enigmatic quality has driven people crazy for centuries. Whatever the reason, Mona Lisa’s look of preternatural calm comports with the idealized landscape behind her, which dissolves into the distance through Leonardo’s use of atmospheric perspective.");
	var aWork2 = new artworkFinderClass("Girl with a Pearl Earring", "Johannes Vermeer", "1665", "Johannes Vermeer’s 1665 study of a young woman is startlingly real and startlingly modern, almost as if it were a photograph. This gets into the debate over whether or not Vermeer employed a pre-photographic device called a camera obscura to create the image. Leaving that aside, the sitter is unknown, though it’s been speculated that she might have been Vermeer's maid. He portrays her looking over her shoulder, locking her eyes with the viewer as if attempting to establish an intimate connection across the centuries. Technically speaking, Girl isn’t a portrait, but rather an example of the Dutch genre called a tronie—a headshot meant more as still life of facial features than as an attempt to capture a likeness.");
	var aWork3 = new artworkFinderClass("The Starry Night", "Vincent van Gogh", "1889", "Vincent Van Gogh’s most popular painting, The Starry Night was created by Van Gogh at the asylum in Saint-Rémy, where he’d committed himself in 1889. Indeed, The Starry Night seems to reflect his turbulent state of mind at the time, as the night sky comes alive with swirls and orbs of frenetically applied brush marks springing from the yin and yang of his personal demons and awe of nature.");
	var aWork4 = new artworkFinderClass("Arrangement in Grey and Black No. 1", "James Abbott McNeill Whistler", "1871", "Whistler’s Mother, or Arrangement in Grey and Black No. 1, as it’s actually titled, speaks to the artist’s ambition to pursue art for art’s sake. James Abbott McNeill Whistler painted the work in his London studio in 1871, and in it, the formality of portraiture becomes an essay in form. Whistler’s mother Anna is pictured as one of several elements locked into an arrangement of right angles. Her severe expression fits in with the rigidity of the composition, and it’s somewhat ironic to note that despite Whistler’s formalist intentions, the painting became a symbol of motherhood.");
	var aWork5 = new artworkFinderClass("The Kiss", "Gustav Klimt", "1907–1908", "Opulently gilded and extravagantly patterned, The Kiss, Gustav Klimt’s fin-de-siècle portrayal of intimacy, is a mix of Symbolism and Vienna Jugendstil, the Austrian variant of Art Nouveau. Klimt depicts his subjects as mythical figures made modern by luxuriant surfaces of up-to-the moment graphic motifs. The work is a highpoint of the artist’s Golden Phase between 1899 and 1910 when he often used gold leaf—a technique inspired by a 1903 trip to the Basilica di San Vitale in Ravenna, Italy, where he saw the church’s famed Byzantine mosaics.");
	var aWork6 = new artworkFinderClass("The Arnolfini Portrait", "Jan van Eyck", "1434", "One of the most significant works produced during the Northern Renaissance, this composition is believed to be one of the first paintings executed in oils. A full-length double portrait, it reputedly portrays an Italian merchant and a woman who may or may not be his bride. In 1934, the celebrated art historian Erwin Panofsky proposed that the painting is actually a wedding contract. What can be reliably said is that the piece is one of the first depictions of an interior using orthogonal perspective to create a sense of space that seems contiguous with the viewer’s own; it feels like a painting you could step into.");
	var aWork7 = new artworkFinderClass("A Sunday Afternoon on the Island of La Grande Jatte", "Georges Seurat", "1884–1886", "Georges Seurat’s masterpiece, evoking the Paris of La Belle Epoque, is actually depicting a working-class suburban scene well outside the city’s center. Seurat often made this milieu his subject, which differed from the bourgeois portrayals of his Impressionist contemporaries. Seurat abjured the capture-the-moment approach of Manet, Monet and Degas, going instead for the sense of timeless permanence found in Greek sculpture. And that is exactly what you get in this frieze-like processional of figures whose stillness is in keeping with Seurat’s aim of creating a classical landscape in modern form.");
	var aWork8 = new artworkFinderClass("The Harvesters", "Pieter Bruegel the Elder", "1565", "Bruegel’s fanfare for the common man is considered one of the defining works of Western art. This composition was one of six created on the theme of the seasons. The time is probably early September. A group of peasants on the left cut and bundle ripened wheat, while the on the right, another group takes their midday meal. One figure is sacked out under a tree with his pants unbuttoned. This attention to detail continues throughout the painting as a procession of ever-granular observations receding into space. It was extraordinary for a time when landscapes served mostly as backdrops for religious paintings.");
	var aWork9 = new artworkFinderClass("Composition with Red Blue and Yellow", "Piet Mondrian", "1930", "A small painting (18 inches by 18 inches) that packs a big art-historical punch, Mondrian’s work represents a radical distillation of form, color and composition to their basic components. Limiting his palette to the primary triad (red, yellow and blue), plus black and white, Mondrian applied pigment in flat unmixed patches in an arrangement of squares and rectangles that anticipated Minimalism.");

	
    artworkArry.push(aWork0,aWork1,aWork2,aWork3,aWork4,aWork5,aWork6,aWork7,aWork8,aWork9);
}

function accessInformation() {
	var x = Math.floor((Math.random() * 9) +1 );
	
    document.getElementById("Artwork").src= artImg[x];
    document.getElementById("Title").innerHTML = artworkArry[x].toStringTitle();
	document.getElementById("Author").innerHTML = artworkArry[x].toStringAuthor();
	document.getElementById("Year").innerHTML = artworkArry[x].toStringYear();
	document.getElementById("Description").innerHTML = artworkArry[x].toStringDescription();

}
	



