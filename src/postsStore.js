import { writable } from 'svelte/store';
import { supabase } from '$lib/supabase.js';

export const postsStore = writable([
	{
		id: 1,
		text: 'FIRST post text FIRST post textFIRST post textFIRST post textFIRST post textFIRST post textFIRST post textFIRST post textFIRST post textFIRST post textFIRST post textFIRST post text',
		src: 'https://www.statista.com/graphic/1/1122987/change-in-remote-work-trends-after-covid-in-usa.jpg'
	}
]);


// {
// 	id: 1,
// 	text: 'FIRST post text FIRST post textFIRST post textFIRST post textFIRST post textFIRST post textFIRST post textFIRST post textFIRST post textFIRST post textFIRST post textFIRST post text',
// 	src: 'https://www.statista.com/graphic/1/1122987/change-in-remote-work-trends-after-covid-in-usa.jpg'
// },
// {
// 	id: 2,
// 	text: 'SECOND post text SECOND post textSECOND post textSECOND post textSECOND post textSECOND post textSECOND post textSECOND post textSECOND post textSECOND post textSECOND post text',
// 	src: ''
// },
// {
// 	id: 3,
// 	text: 'THIRD post textTHIRD post textTHIRD post textTHIRD post textTHIRD post textTHIRD post textTHIRD post textTHIRD post text',
// 	src: 'https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/02-Ease-of-communication-Bar-graph-R3-@2x.png'
// },
// {
// 	id: 4,
// 	text: 'FOURTH post text FOURTH post textFOURTH post textFOURTH post textFOURTH post text',
// 	src: ''
// },
// {
// 	id: 5,
// 	text: 'FIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post text FIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post st textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post text FIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post textFIFTH post',
// 	src: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Composition_of_38th_Parliament.png'
// }
