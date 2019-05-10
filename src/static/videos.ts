import { Video } from 'src/app/models/video';

const mockVideos: Array<Video> = [
    {
        id: '1',
        name: 'video 1',
        preview: 'https://pp.userapi.com/c837627/v837627453/313b4/hk9rdXaKInQ.jpg',
        duration: new Date()
    },
    {
        id: '2',
        name: 'video 2',
        preview: 'https://pp.userapi.com/c845219/v845219224/17ad5f/GM0iUs1il1o.jpg',
        duration: new Date()
    },
    {
        id: '3',
        name: 'video 3',
        preview: 'https://pp.userapi.com/c831308/v831308768/1d7639/9sC24FWoBqw.jpg',
        duration: new Date()
    },
    {
        id: '4',
        name: 'video 4',
        preview: 'https://pp.userapi.com/c850324/v850324351/7d50f/jcwrimAdZHQ.jpg',
        duration: new Date()
    },
    {
        id: '5',
        name: 'video 5',
        preview: 'https://pp.userapi.com/c845418/v845418620/1c2874/OfR5dMeEkNo.jpg',
        duration: new Date()
    },
    {
        id: '6',
        name: 'video 6',
        preview: 'https://pp.userapi.com/c830400/v830400646/61d34/spOR81Yd5EY.jpg',
        duration: new Date()
    },
    {
        id: '7',
        name: 'video 7',
        preview: 'https://pp.userapi.com/c848616/v848616671/155b40/_hpFPRlkJuM.jpg',
        duration: new Date()
    },
    {
        id: '8',
        name: 'video 8',
        preview: 'https://pp.userapi.com/c845121/v845121520/1cce50/xk3wslSG-TQ.jpg',
        duration: new Date()
    },
    {
        id: '9',
        name: 'video 9',
        preview: 'https://pp.userapi.com/c845521/v845521980/1b3a57/eZXAgPZEwC8.jpg',
        duration: new Date()
    },
    {
        id: '1',
        name: 'video 1',
        preview: 'https://pp.userapi.com/c837627/v837627453/313b4/hk9rdXaKInQ.jpg',
        duration: new Date()
    },
    {
        id: '2',
        name: 'video 2',
        preview: 'https://pp.userapi.com/c845219/v845219224/17ad5f/GM0iUs1il1o.jpg',
        duration: new Date()
    },
    {
        id: '3',
        name: 'video 3',
        preview: 'https://pp.userapi.com/c831308/v831308768/1d7639/9sC24FWoBqw.jpg',
        duration: new Date()
    },
    {
        id: '4',
        name: 'video 4',
        preview: 'https://pp.userapi.com/c850324/v850324351/7d50f/jcwrimAdZHQ.jpg',
        duration: new Date()
    },
    {
        id: '5',
        name: 'video 5',
        preview: 'https://pp.userapi.com/c845418/v845418620/1c2874/OfR5dMeEkNo.jpg',
        duration: new Date()
    },
    {
        id: '6',
        name: 'video 6',
        preview: 'https://pp.userapi.com/c830400/v830400646/61d34/spOR81Yd5EY.jpg',
        duration: new Date()
    },
    {
        id: '7',
        name: 'video 7',
        preview: 'https://pp.userapi.com/c848616/v848616671/155b40/_hpFPRlkJuM.jpg',
        duration: new Date()
    },
    {
        id: '8',
        name: 'video 8',
        preview: 'https://pp.userapi.com/c845121/v845121520/1cce50/xk3wslSG-TQ.jpg',
        duration: new Date()
    },
    {
        id: '9',
        name: 'video 9',
        preview: 'https://pp.userapi.com/c845521/v845521980/1b3a57/eZXAgPZEwC8.jpg',
        duration: new Date()
    },
    {
        id: '1',
        name: 'video 1',
        preview: 'https://pp.userapi.com/c837627/v837627453/313b4/hk9rdXaKInQ.jpg',
        duration: new Date()
    },
    {
        id: '2',
        name: 'video 2',
        preview: 'https://pp.userapi.com/c845219/v845219224/17ad5f/GM0iUs1il1o.jpg',
        duration: new Date()
    },
    {
        id: '3',
        name: 'video 3',
        preview: 'https://pp.userapi.com/c831308/v831308768/1d7639/9sC24FWoBqw.jpg',
        duration: new Date()
    },
    {
        id: '4',
        name: 'video 4',
        preview: 'https://pp.userapi.com/c850324/v850324351/7d50f/jcwrimAdZHQ.jpg',
        duration: new Date()
    },
    {
        id: '5',
        name: 'video 5',
        preview: 'https://pp.userapi.com/c845418/v845418620/1c2874/OfR5dMeEkNo.jpg',
        duration: new Date()
    },
    {
        id: '6',
        name: 'video 6',
        preview: 'https://pp.userapi.com/c830400/v830400646/61d34/spOR81Yd5EY.jpg',
        duration: new Date()
    },
    {
        id: '7',
        name: 'video 7',
        preview: 'https://pp.userapi.com/c848616/v848616671/155b40/_hpFPRlkJuM.jpg',
        duration: new Date()
    },
    {
        id: '8',
        name: 'video 8',
        preview: 'https://pp.userapi.com/c845121/v845121520/1cce50/xk3wslSG-TQ.jpg',
        duration: new Date()
    },
    {
        id: '9',
        name: 'video 9',
        preview: 'https://pp.userapi.com/c845521/v845521980/1b3a57/eZXAgPZEwC8.jpg',
        duration: new Date()
    },
    {
        id: '1',
        name: 'video 1',
        preview: 'https://pp.userapi.com/c837627/v837627453/313b4/hk9rdXaKInQ.jpg',
        duration: new Date()
    },
    {
        id: '2',
        name: 'video 2',
        preview: 'https://pp.userapi.com/c845219/v845219224/17ad5f/GM0iUs1il1o.jpg',
        duration: new Date()
    },
    {
        id: '3',
        name: 'video 3',
        preview: 'https://pp.userapi.com/c831308/v831308768/1d7639/9sC24FWoBqw.jpg',
        duration: new Date()
    },
    {
        id: '4',
        name: 'video 4',
        preview: 'https://pp.userapi.com/c850324/v850324351/7d50f/jcwrimAdZHQ.jpg',
        duration: new Date()
    },
    {
        id: '5',
        name: 'video 5',
        preview: 'https://pp.userapi.com/c845418/v845418620/1c2874/OfR5dMeEkNo.jpg',
        duration: new Date()
    },
    {
        id: '6',
        name: 'video 6',
        preview: 'https://pp.userapi.com/c830400/v830400646/61d34/spOR81Yd5EY.jpg',
        duration: new Date()
    },
    {
        id: '7',
        name: 'video 7',
        preview: 'https://pp.userapi.com/c848616/v848616671/155b40/_hpFPRlkJuM.jpg',
        duration: new Date()
    },
    {
        id: '8',
        name: 'video 8',
        preview: 'https://pp.userapi.com/c845121/v845121520/1cce50/xk3wslSG-TQ.jpg',
        duration: new Date()
    },
    {
        id: '9',
        name: 'video 9',
        preview: 'https://pp.userapi.com/c845521/v845521980/1b3a57/eZXAgPZEwC8.jpg',
        duration: new Date()
    },
    {
        id: '1',
        name: 'video 1',
        preview: 'https://pp.userapi.com/c837627/v837627453/313b4/hk9rdXaKInQ.jpg',
        duration: new Date()
    },
    {
        id: '2',
        name: 'video 2',
        preview: 'https://pp.userapi.com/c845219/v845219224/17ad5f/GM0iUs1il1o.jpg',
        duration: new Date()
    },
    {
        id: '3',
        name: 'video 3',
        preview: 'https://pp.userapi.com/c831308/v831308768/1d7639/9sC24FWoBqw.jpg',
        duration: new Date()
    },
    {
        id: '4',
        name: 'video 4',
        preview: 'https://pp.userapi.com/c850324/v850324351/7d50f/jcwrimAdZHQ.jpg',
        duration: new Date()
    },
    {
        id: '5',
        name: 'video 5',
        preview: 'https://pp.userapi.com/c845418/v845418620/1c2874/OfR5dMeEkNo.jpg',
        duration: new Date()
    },
    {
        id: '6',
        name: 'video 6',
        preview: 'https://pp.userapi.com/c830400/v830400646/61d34/spOR81Yd5EY.jpg',
        duration: new Date()
    },
    {
        id: '7',
        name: 'video 7',
        preview: 'https://pp.userapi.com/c848616/v848616671/155b40/_hpFPRlkJuM.jpg',
        duration: new Date()
    },
    {
        id: '8',
        name: 'video 8',
        preview: 'https://pp.userapi.com/c845121/v845121520/1cce50/xk3wslSG-TQ.jpg',
        duration: new Date()
    },
    {
        id: '9',
        name: 'video 9',
        preview: 'https://pp.userapi.com/c845521/v845521980/1b3a57/eZXAgPZEwC8.jpg',
        duration: new Date()
    },
    {
        id: '1',
        name: 'video 1',
        preview: 'https://pp.userapi.com/c837627/v837627453/313b4/hk9rdXaKInQ.jpg',
        duration: new Date()
    },
    {
        id: '2',
        name: 'video 2',
        preview: 'https://pp.userapi.com/c845219/v845219224/17ad5f/GM0iUs1il1o.jpg',
        duration: new Date()
    },
    {
        id: '3',
        name: 'video 3',
        preview: 'https://pp.userapi.com/c831308/v831308768/1d7639/9sC24FWoBqw.jpg',
        duration: new Date()
    },
    {
        id: '4',
        name: 'video 4',
        preview: 'https://pp.userapi.com/c850324/v850324351/7d50f/jcwrimAdZHQ.jpg',
        duration: new Date()
    },
    {
        id: '5',
        name: 'video 5',
        preview: 'https://pp.userapi.com/c845418/v845418620/1c2874/OfR5dMeEkNo.jpg',
        duration: new Date()
    },
    {
        id: '6',
        name: 'video 6',
        preview: 'https://pp.userapi.com/c830400/v830400646/61d34/spOR81Yd5EY.jpg',
        duration: new Date()
    },
    {
        id: '7',
        name: 'video 7',
        preview: 'https://pp.userapi.com/c848616/v848616671/155b40/_hpFPRlkJuM.jpg',
        duration: new Date()
    },
    {
        id: '8',
        name: 'video 8',
        preview: 'https://pp.userapi.com/c845121/v845121520/1cce50/xk3wslSG-TQ.jpg',
        duration: new Date()
    },
    {
        id: '9',
        name: 'video 9',
        preview: 'https://pp.userapi.com/c845521/v845521980/1b3a57/eZXAgPZEwC8.jpg',
        duration: new Date()
    },
    {
        id: '1',
        name: 'video 1',
        preview: 'https://pp.userapi.com/c837627/v837627453/313b4/hk9rdXaKInQ.jpg',
        duration: new Date()
    },
    {
        id: '2',
        name: 'video 2',
        preview: 'https://pp.userapi.com/c845219/v845219224/17ad5f/GM0iUs1il1o.jpg',
        duration: new Date()
    },
    {
        id: '3',
        name: 'video 3',
        preview: 'https://pp.userapi.com/c831308/v831308768/1d7639/9sC24FWoBqw.jpg',
        duration: new Date()
    },
    {
        id: '4',
        name: 'video 4',
        preview: 'https://pp.userapi.com/c850324/v850324351/7d50f/jcwrimAdZHQ.jpg',
        duration: new Date()
    },
    {
        id: '5',
        name: 'video 5',
        preview: 'https://pp.userapi.com/c845418/v845418620/1c2874/OfR5dMeEkNo.jpg',
        duration: new Date()
    },
    {
        id: '6',
        name: 'video 6',
        preview: 'https://pp.userapi.com/c830400/v830400646/61d34/spOR81Yd5EY.jpg',
        duration: new Date()
    },
    {
        id: '7',
        name: 'video 7',
        preview: 'https://pp.userapi.com/c848616/v848616671/155b40/_hpFPRlkJuM.jpg',
        duration: new Date()
    },
    {
        id: '8',
        name: 'video 8',
        preview: 'https://pp.userapi.com/c845121/v845121520/1cce50/xk3wslSG-TQ.jpg',
        duration: new Date()
    },
    {
        id: '9',
        name: 'video 9',
        preview: 'https://pp.userapi.com/c845521/v845521980/1b3a57/eZXAgPZEwC8.jpg',
        duration: new Date()
    },
    {
        id: '1',
        name: 'video 1',
        preview: 'https://pp.userapi.com/c837627/v837627453/313b4/hk9rdXaKInQ.jpg',
        duration: new Date()
    },
    {
        id: '2',
        name: 'video 2',
        preview: 'https://pp.userapi.com/c845219/v845219224/17ad5f/GM0iUs1il1o.jpg',
        duration: new Date()
    },
    {
        id: '3',
        name: 'video 3',
        preview: 'https://pp.userapi.com/c831308/v831308768/1d7639/9sC24FWoBqw.jpg',
        duration: new Date()
    },
    {
        id: '4',
        name: 'video 4',
        preview: 'https://pp.userapi.com/c850324/v850324351/7d50f/jcwrimAdZHQ.jpg',
        duration: new Date()
    },
    {
        id: '5',
        name: 'video 5',
        preview: 'https://pp.userapi.com/c845418/v845418620/1c2874/OfR5dMeEkNo.jpg',
        duration: new Date()
    },
    {
        id: '6',
        name: 'video 6',
        preview: 'https://pp.userapi.com/c830400/v830400646/61d34/spOR81Yd5EY.jpg',
        duration: new Date()
    },
    {
        id: '7',
        name: 'video 7',
        preview: 'https://pp.userapi.com/c848616/v848616671/155b40/_hpFPRlkJuM.jpg',
        duration: new Date()
    },
    {
        id: '8',
        name: 'video 8',
        preview: 'https://pp.userapi.com/c845121/v845121520/1cce50/xk3wslSG-TQ.jpg',
        duration: new Date()
    },
    {
        id: '9',
        name: 'video 9',
        preview: 'https://pp.userapi.com/c845521/v845521980/1b3a57/eZXAgPZEwC8.jpg',
        duration: new Date()
    },
];

export { mockVideos };