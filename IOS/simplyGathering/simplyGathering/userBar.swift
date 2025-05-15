//
//  userBar.swift
//  simplyGathering
//
//  Created by Student on 5/14/25.
//

import SwiftUI

struct userBar: View {
	var body: some View {
		NavigationStack{
			VStack{
				HStack{				//User Bar VV
					NavigationLink(destination: ContentView()) {
						Image(.simpleIcon)
							.resizable()
							.frame(width: 75, height: 75)
							.clipShape(Circle())
							.shadow(radius: 8)
							.padding(.trailing)
						
						VStack {
							Text("\(owner.name)")
								.font(.title2)
								.bold()
								.foregroundStyle(.black)
							Text("\(address.street), \(address.city), \(address.state)")
								.foregroundStyle(.black)
							Text("")
						}
					}
				} 								//User Bar Background VV
				.padding(25)
				.background(Color.grey)
				.clipShape(RoundedRectangle(cornerRadius: 45))
			}
		}
	}
}

#Preview {
    userBar()
}
