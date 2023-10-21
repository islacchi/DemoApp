import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'

const SLIDER_WIDTH = Dimensions.get('window').width + 80
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const data = [
    {
      title: "_lolaafloraa",
      body: "An album dedicated to this wonderful creature",
      imgUrl: "https://scontent-mnl1-1.xx.fbcdn.net/v/t1.15752-9/373465062_700956525266252_4905213524815580008_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEvj8raeMwtdgF-e_yK5TDUXm3RHDaWFu5ebdEcNpYW7jaHyJW7PkvP6AGMr1Z8ZzhmzgXfftP-6O0lw1z8Jqsc&_nc_ohc=q7mbc6dGnekAX-oKedC&_nc_ht=scontent-mnl1-1.xx&oh=03_AdQuA3ZXrs9Y0qVP0Y9oeoXppR4SMGBOR7Yp8yIte8MPHw&oe=655B43E8",
    },
    {
      title: "上品 (Jouhin)",
      body: "She was a masterpiece painted with stardust, an artwork of the cosmos in human form.",
      imgUrl: "https://scontent.fceb6-1.fna.fbcdn.net/v/t1.15752-9/379355246_218526184553292_8217347380991994778_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGghNNjdOszreFKGrPVqSxPIxx43SNvmf0jHHjdI2-Z_bSO9YcfW-1wI038iDxMga7agvQvFT2rc88Rr7Skeb3v&_nc_ohc=1GbbbqN5cM0AX9sprmV&_nc_ht=scontent.fceb6-1.fna&oh=03_AdTRbK2-vA9-F9LM7HfJmiwaSElTYRUHk9J65PKsltnWnA&oe=6554B9B8",
    },
    {
      title: "美しい (Utsukushii)",
      body: "In the garden of my thoughts, she's the most beautiful flower, blooming with grace and elegance.",
      imgUrl: "https://scontent.xx.fbcdn.net/v/t1.15752-9/387342454_823008376189773_1580682478193749296_n.jpg?stp=dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=510075&_nc_eui2=AeE_vcpGl9havPik-8kalIOmjHExfxPICTqMcTF_E8gJOhjBKOn81KWj6JwVib9esbKRDsoj4EZjrwhHlvmqMjyx&_nc_ohc=KlgB9Q15Op4AX8GHpY6&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQE3dFqCPuf9g_eLW1fRSFNcg_X28y7ClfL6G3N1YyZyQ&oe=655B330A",
    },
    {
        title: "ほし (Hoshi)",
        body: "Like the ocean, her depths held mysteries, and I was eager to explore every wave of her being.",
        imgUrl: "https://scontent-mnl1-1.xx.fbcdn.net/v/t1.15752-9/387330872_1377280256557754_1320408620193700585_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHduf01MBFMkW_kr6SHRDVvf8HKWABL7pV_wcpYAEvulafR-_T58om_voW97CeYrT6JzvK4F6ivvedXjAzSRtu8&_nc_ohc=XDY7dO9GlCIAX9w83Uv&_nc_ht=scontent-mnl1-1.xx&oh=03_AdRhZXHZ4-725TuCdAFYeni_f2cxQRd_KSGY5pbNGy6Cjg&oe=655B2A35",
      },
      {
        title: "きれい (kirei)",
        body: "She is the gentle whisper of the wind, the warmth of the morning sun, and the enchanting dance of the stars at night.",
        imgUrl: "https://scontent.fcrk4-1.fna.fbcdn.net/v/t1.15752-9/387328976_276329112053900_8772369741785682795_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHSzKg96Thsib5nCOkevWI8A7oaYqHFNL8DuhpiocU0v9rZy9JYCbXS426yH2ybRlZyPw_-0At_YBzbOODUAyRf&_nc_ohc=mtNUKOO0NaIAX9YYONr&_nc_ht=scontent.fcrk4-1.fna&oh=03_AdTJ3V50rtIeUoqpmzau9IcvXBcR8GkOkMMxKnGgR3XPNg&oe=655B558F",
      },
  ];

  const CarouselCardItem = ({ item, index }) => {
    return (
      <View style={styles.containerCardItem} key={index}>
        <Image
          source={{ uri: item.imgUrl }}
          style={styles.image}
        />
        <Text style={styles.header}>{item.title}</Text>
        <Text style={styles.body}>{item.body}</Text>
      </View>
    )
  }

const CarouselCards = () => {
    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)
    
    return (
      <View>
        <Carousel
          layout="tinder"
          layoutCardOffset={9}
          ref={isCarousel}
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={(index) => setIndex(index)}
          useScrollView={true}
        />
        <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
      </View>
    )
  }
export function CarouselC() {
  return (
    <SafeAreaView style={styles.container}>
      <CarouselCards />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerCardItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    height: 530,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 330,    
  },
  header: {
    color: "#222",
    fontSize: 25,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 10,
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop:5
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
});