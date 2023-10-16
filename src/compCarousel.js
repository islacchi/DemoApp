import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'

const SLIDER_WIDTH = Dimensions.get('window').width + 80
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const data = [
    {
      title: "_lolaafloraa",
      body: "An album dedicated to this wonderful creature",
      imgUrl: "https://scontent.fceb6-1.fna.fbcdn.net/v/t1.15752-9/393518251_984390652793224_8115553887308899471_n.png?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeH7Sgf1X6DW30Yu-IFGJf1laqvHHCq0rytqq8ccKrSvK17G5oIbnt9ZafVai3gP4EuOIIpCMhqsktLk7rSyVKy5&_nc_ohc=auXe7c07u9QAX-ENxoY&_nc_ht=scontent.fceb6-1.fna&oh=03_AdQlLLxfkhRyRLHzeimunBMCN86QO_JMCDkYdKbXSWrvFg&oe=6554B82C",
    },
    {
      title: "Caeli",
      body: "She was a masterpiece painted with stardust, an artwork of the cosmos in human form.",
      imgUrl: "https://scontent.fceb6-1.fna.fbcdn.net/v/t1.15752-9/379355246_218526184553292_8217347380991994778_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGghNNjdOszreFKGrPVqSxPIxx43SNvmf0jHHjdI2-Z_bSO9YcfW-1wI038iDxMga7agvQvFT2rc88Rr7Skeb3v&_nc_ohc=1GbbbqN5cM0AX9sprmV&_nc_ht=scontent.fceb6-1.fna&oh=03_AdTRbK2-vA9-F9LM7HfJmiwaSElTYRUHk9J65PKsltnWnA&oe=6554B9B8",
    },
    {
      title: "Venusta",
      body: "In the garden of my thoughts, she's the most beautiful flower, blooming with grace and elegance.",
      imgUrl: "https://scontent.fceb6-1.fna.fbcdn.net/v/t1.15752-9/379629340_330757129488565_8305284303877436484_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHb7oLLD-dVbmVo0KR7zDO66ChD_2QO2fXoKEP_ZA7Z9QhTE9x5WA9Z9tpptapI3HQVFC5hoQ4NuCW1pnXuKPmy&_nc_ohc=ifC4dicskX4AX96sqDQ&_nc_ht=scontent.fceb6-1.fna&oh=03_AdRbnlpAoWtUOEuBHqwayi016mU5lH32E5Ffcc56OgCy5w&oe=6554D3A3",
    },
    {
        title: "fascinans",
        body: "Like the ocean, her depths held mysteries, and I was eager to explore every wave of her being.",
        imgUrl: "https://scontent.fceb6-1.fna.fbcdn.net/v/t1.15752-9/379573598_234383265924199_4208225073678290633_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeH7imLhSrFL3Mf-GMOQGVMv3mOvqDr5JfTeY6-oOvkl9OPnHSNJjnhm9vhSMzTJp_j9_qmSJeA1ReLmfmPCw2sT&_nc_ohc=4IRxe9scYjwAX8e2sOp&_nc_ht=scontent.fceb6-1.fna&oh=03_AdQT2YpuOrMwzURFVlEZ2CUAHL1necVFiZDTSrt3V1E_UA&oe=6554B1B2",
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
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
});