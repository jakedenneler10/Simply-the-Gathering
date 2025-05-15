//
//  gameData.swift
//  simplyGathering
//
//  Created by Student on 5/13/25.

//
import Foundation

class HomeOwner:Codable{
	var name : String = "John Doe"
	var age : Int = 32
	var ownerAddress : Address = Address()
	
	init(name: String, age: Int, ownerAddress: Address){
		self.name = name
		self.age = age
		self.ownerAddress = ownerAddress
		
	}
}


                                                                                                                                     

class Address : Codable {
	var street : String = "123 Main St"
	var city : String = "Anytown"
	var zip : String = "90210"
	var state : String = "CA"
}

let address = Address()		//Reaches from Address Class

class Game : Codable {
	var games: [String] = [""]
	var gameType : String = ""
	var isActive : Bool = false
}

let gameClass = Game()		// Reaches from Game Class


