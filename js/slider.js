var Slider = function(){ this.initialize.apply(this, arguments) };

Slider.prototype = {

  initialize: function(slider) {

    this.ul = slider.children[0];
    this.li = this.ul.children;

    //set ul size dynamically
    this.ul.style.width = (this.li[0].clientWidth * this.li.length) + 'px';

    this.currentIndex = 0;

  },

  specificSlide: function(index) {
    //filter invalid indices
    if (index < 0 || index > this.li.length - 1 ){
      return
    }

    // move ul left
    this.ul.style.left = '-' + (100 * index) + '%';
    this.currentIndex = index;

  },

  prevSlide: function(){
    this.specificSlide(this.currentIndex - 1 );
  },

  nextSlide: function(){
    this.specificSlide(this.currentIndex + 1);
  }
};