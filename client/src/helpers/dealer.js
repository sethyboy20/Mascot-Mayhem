import Card from './card';
import Controller from './controller';
import Mascot from './mascot'
import Resource from './resource'
export default class Dealer {
    gatorAttributes = ['gator', 4000, 'S'];
    //mascostList = ['gator', ];
    constructor(scene) {
        this.dealCards = () => {
            let playerSprite;
            let opponentSprite;
            let mascotSprite;

            if (scene.isPlayerA) {
                playerSprite = 'p1CardFront';
                opponentSprite = 'p2CardBack';
                mascotSprite = 'mascotCardFront';
            } else {
                playerSprite = 'p2CardFront';
                opponentSprite = 'p1CardBack';
                mascotSprite = 'mascotCardFront';
            };
            for (let i = 0; i < 2; i++) {
                //render player cards
                let playerCard = new Card(scene, 475 + (i * 100), 670, playerSprite);

                let playerMascot = new Mascot(scene,675 + (i * 100), 670, mascotSprite);

                //let playerMascot = new Mascot(this.gatorAttributes.at(0), this.gatorAttributes.at(1), this.gatorAttributes.at(2), scene);
                //playerMascot.render(675 + (i * 100), 670, mascotSprite);

                let playerResource = new Resource(scene, 875 + (i * 100), 670, playerSprite);
                let resourceTextureKey = playerResource.getResType();
                playerResource.setTexture(resourceTextureKey);
                console.log("Class obj val: " + playerResource.getResVal());


                if (scene.isPlayerA) {
                    playerSprite = 'p1CardFront';
                }
                else {
                    playerSprite = 'p2CardFront';
                }

                //render opponent cards
                let opponentCard = new Card(scene, 475 + (i * 100), 50, opponentSprite);
                scene.opponentCards.push((opponentCard).disableInteractive());

                let opponentMascot = new Mascot(scene,675 + (i * 100), 50, opponentSprite);
                scene.opponentCards.push(opponentMascot.disableInteractive());

                let opponentResource = new Card(scene, 875 + (i * 100), 50, opponentSprite);
                scene.opponentCards.push((opponentResource).disableInteractive());
            }
        }
    }
}