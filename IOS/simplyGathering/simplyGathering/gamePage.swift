//
//  gamePage.swift
//  simplyGathering
//
//  Created by Student on 5/12/25.
//

import SwiftUI

class HomeOwner : ObservableObject {
	var name : String = "John Doe"
	var age : Int = 32
	var ownerAddress : Address = Address()
}

let owner = HomeOwner()		//Allows us to grab from HomeOwner Class

class Address : ObservableObject {
	var street : String = "123 Main St"
	var city : String = "Anytown"
	var zip : String = "90210"
	var state : String = "CA"
}

let address = Address()		//Reaches from Address Class

class Game : ObservableObject {
	var games: [String] = [""]
	var gameType : String = ""
	var isActive : Bool = false
}

let gameClass = Game()		// Reaches from Game Class

struct gamePage: View {
    var body: some View {
		VStack{
			ZStack {
				Color.cardGreen
					.ignoresSafeArea()
					.frame(height: 75)
				HStack {
					Image("cardPNG")
						.resizable()
						.frame(width: 75, height: 75)
					
					Text("Simply Gathering")
						.font(.title)
						.bold()
						.shadow(color: .white, radius: 3)
				}
				
			} // Title Bar
			
			Text("\(owner.name)")
			
			Spacer()
			
			ZStack{
				Color.cardGreen
					.ignoresSafeArea(edges: .all)
					.frame(height: 50)
			} // Bottom Bar
			
		}.navigationBarBackButtonHidden(true)
    }
}

#Preview {
    gamePage()
}
