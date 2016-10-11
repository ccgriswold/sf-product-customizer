/*jshint esnext: true, browser: true */

// module provides method to identify user selected icon
module.exports = function (selectedIcon, preview) {
    const icons = {
        no_image: {
            name: 'No Image',
            image: "{{ 'noimage.jpg' | asset_url }}"
        },
        us_flag: {
            name: 'US Flag',
            image: "https://www.dropbox.com/s/aq3z2mnmheop6cf/American%20Flag.png?raw=1"
        },
        pistol_cross: {
            name: 'Crossed Pistols',
            image: "https://www.dropbox.com/s/2oyu7ks3m3yl6oq/Pistols%20Crossed.jpg?raw=1"
        },
        rifle_cross: {
            name: 'Rifles',
            image: "https://www.dropbox.com/s/gcrz9y5oq3syehs/Rifles%20Crossed.png?raw=1"
        },
        lure: {
            name: 'Lure',
            image: "https://www.dropbox.com/s/pdgq5vuhk2rb5js/Lure.png?raw=1"
        },
        thorn_cross: {
            name: 'Thorn Cross',
            image: "{{ 'Cross+Icon.png' | 'https://www.dropbox.com/sh/9qvs1uz9oaf9xgu/AAAtUvvTI6DOZBU3S2krNxuna/Icons?dl=0&preview=Cross+Icon.png'}}"
        },
        sc_palm_tree: {
            name: 'SC Palm Tree',
            image: "https://www.dropbox.com/s/ehmdprjy055qtqr/SC%20Palm%20Tree.png?raw=1"
        },
        fish_icon: {
            name: 'Fish Icon',
            image: "https://www.dropbox.com/s/6v99jvgjljobrxb/fishing.jpg?raw=1"
        },
        daughter_dad_icon: {
            name: 'Father/Daughter Icon',
            image: "https://www.dropbox.com/s/pdxuc9lkvk8w1k4/Daddy%20Daughter%20Icon.gif?raw=1"
        },
        son_dad_fishing_icon: {
            name: 'Father/Son Fishing',
            image: "https://www.dropbox.com/s/6v99jvgjljobrxb/fishing.jpg?raw=1"
        },
        silhouette: {
            name: 'Silhouette',
            image: "{{ 'silhouette.jpg' | asset_url }}"
        },

        alabama: {
            name: 'Alabama',
            image: "{{ 'alabama.jpg' | asset_url }}"
        },
        alaska: {
            name: 'Alaska',
            image: "{{ 'alaska.jpg' | asset_url }}"
        },
        arizona: {
            name: 'Arizona',
            image: "{{ 'arizona.jpg' | asset_url }}"
        },
        arkansas: {
            name: 'Arkansas',
            image: "{{ 'arkansas.jpg' | asset_url }}"
        },
        california: {
            name: 'California',
            image: "{{ 'california.jpg' | asset_url }}"
        },
        colorado: {
            name: 'Colorado',
            image: "{{ 'colorado.jpg' | asset_url }}"
        },
        connecticut: {
            name: 'Connecticut',
            image: "{{ 'Connecticut.jpg' | asset_url }}"
        },
        delaware: {
            name: 'Delaware',
            image: "{{ 'delaware.jpg' | asset_url }}"
        },
        florida: {
            name: 'Florida',
            image: "{{ 'florida.jpg' | asset_url }}"
        },
        georgia: {
            name: 'Georgia',
            image: "{{ 'georgia.jpg' | asset_url }}"
        },
        hawaii: {
            name: 'Hawaii',
            image: "{{ 'hawaii.jpg' | asset_url }}"
        },
        idaho: {
            name: 'Idaho',
            image: "{{ 'idaho.jpg' | asset_url }}"
        },
        illinois: {
            name: 'Illinois',
            image: "{{ 'illinois.jpg' | asset_url }}"
        },
        indiana: {
            name: 'Indiana',
            image: "{{ 'indiana.jpg' | asset_url }}"
        },
        iowa: {
            name: 'Iowa',
            image: "{{ 'iowa.jpg' | asset_url }}"
        },
        kansas: {
            name: 'Kansas',
            image: "{{ 'kansas.jpg' | asset_url }}"
        },
        kentucky: {
            name: 'Kentucky',
            image: "{{ 'kentucky.jpg' | asset_url }}"
        },
        louisiana: {
            name: 'Louisiana',
            image: "{{ 'louisiana.jpg' | asset_url }}"
        },
        maine: {
            name: 'Maine',
            image: "{{ 'maine.jpg' | asset_url }}"
        },
        maryland: {
            name: 'Maryland',
            image: "{{ 'maryland.jpg' | asset_url }}"
        },
        massachusetts: {
            name: 'Massachusetts',
            image: "{{ 'massachusetts.jpg' | asset_url }}"
        },
        michigan: {
            name: 'Michigan',
            image: "{{ 'michigan.jpg' | asset_url }}"
        },
        minnesota: {
            name: 'Minnesota',
            image: "{{ 'minnesota.jpg' | asset_url }}"
        },
        mississippi: {
            name: 'Mississippi',
            image: "{{ 'mississippi.jpg' | asset_url }}"
        },
        missouri: {
            name: 'Missouri',
            image: "{{ 'missouri.jpg' | asset_url }}"
        },
        montana: {
            name: 'Montana',
            image: "{{ 'montana.jpg' | asset_url }}"
        },
        nebraska: {
            name: 'Nebraska',
            image: "{{ 'nebraska.jpg' | asset_url }}"
        },
        new_hampshire: {
            name: 'New Hampshire',
            image: "{{ 'new_hampshire.jpg' | asset_url }}"
        },
        new_jersey: {
            name: 'New Jersey',
            image: "{{ 'new_jersey.jpg' | asset_url }}"
        },
        new_mexico: {
            name: 'New Mexico',
            image: "{{ 'new_mexico.jpg' | asset_url }}"
        },
        new_york: {
            name: 'New York',
            image: "{{ 'new_york.jpg' | asset_url }}"
        },
        north_carolina: {
            name: 'North Carolina',
            image: "{{ 'north_carolina.jpg' | asset_url }}"
        },
        north_dakota: {
            name: 'North Dakota',
            image: "{{ 'north_dakota.jpg' | asset_url }}"
        },
        ohio: {
            name: 'Ohio',
            image: "{{ 'ohio.jpg' | asset_url }}"
        },
        oklahoma: {
            name: 'Oklahoma',
            image: "{{ 'oklahoma.jpg' | asset_url }}"
        },
        oregon: {
            name: 'Oregon',
            image: "{{ 'oregon.jpg' | asset_url }}"
        },
        pennsylvania: {
            name: 'Pennsylvania',
            image: "{{ 'pennsylvania.jpg' | asset_url }}"
        },
        rhode_island: {
            name: 'Rhode Island',
            image: "{{ 'rhode_island.jpg' | asset_url }}"
        },
        south_carolina: {
            name: 'South Carolina',
            image: "{{ 'south_carolina.jpg' | asset_url }}"
        },
        south_dakota: {
            name: 'South Dakota',
            image: "{{ 'south_dakota.jpg' | asset_url }}"
        },
        tennessee: {
            name: 'Tennessee',
            image: "{{ 'tennessee.jpg' | asset_url }}"
        },
        texas: {
            name: 'Texas',
            image: "{{ 'texas.jpg' | asset_url }}"
        },
        utah: {
            name: 'Utah',
            image: "{{ 'utah.jpg' | asset_url }}"
        },
        vermont: {
            name: 'Vermont',
            image: "{{ 'vermont.jpg' | asset_url }}"
        },
        virginia: {
            name: 'Virginia',
            image: "{{ 'virginia.jpg' | asset_url }}"
        },
        washington: {
            name: 'Washington',
            image: "{{ 'washington.jpg' | asset_url }}"
        },
        west_virginia: {
            name: 'West Virginia',
            image: "{{ 'west_virginia.jpg' | asset_url }}"
        },
        wisconsin: {
            name: 'Wisconsin',
            image: "{{ 'wisconsin.jpg' | asset_url }}"
        },
        wyoming: {
            name: 'Wyoming',
            image: "{{ 'wyoming.jpg' | asset_url }}"
        },

    };

    preview.src = icons[selectedIcon].image;
    preview.alt = icons[selectedIcon].name;
};
