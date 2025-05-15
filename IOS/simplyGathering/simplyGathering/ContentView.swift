//
//  ContentView.swift
//  simplyGathering
//
//  Created by Student on 5/12/25.
//

import SwiftUI

struct ContentView: View {
	
	
	var body: some View {
		NavigationStack {
			ZStack{
				Image(.cardBackground)			//Background
					.resizable()
					.aspectRatio(contentMode: .fill)
					.frame(height: 900)
					.ignoresSafeArea(edges: .all)
				VStack {
					Spacer()
					
					Text("Simply Gathering")			//Title
						.font(.title)
						.padding(.vertical, 20)
						.padding(.horizontal, 45)
						.bold()
						.background()
						.opacity(0.8)
						.clipShape(RoundedRectangle(cornerRadius: 10))
						.padding()
					
					NavigationLink("Look For Games Near You!", destination: { gamePage()
					})																			//Nav Link 
					.font(.headline)
					.foregroundStyle(Color.white)
					.padding(.vertical, 15)
					.padding(.horizontal, 35)
					.background(Color.blue)
					.clipShape(RoundedRectangle(cornerRadius: 10))
					
					Spacer()
					
					
				}
			}
			.padding()
		}
	}
}

#Preview {
	ContentView()
}
