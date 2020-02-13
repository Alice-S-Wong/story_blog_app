# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Production stuff for seeds: First admin info with starter password. 
# Also maybe starter info for front page (and author?)

User.create(name: ENV["Name"], email: ENV["Email"], password: ENV["Password"])

Intro.create(introduction: "This is a sample introduction.")

Author.create(pen_name: "Author's Pen Name", bio: "Author's bio goes here.")

story = Story.new(title: "Sample Story. Feel free to delete.", description: "Sample description", release_date: "2020-02-13")
story.save

story = Story.first 
story_id = story.id

post = Post.new(chapter_number: 1, title: "Sample post. Feel free to delete", body: "Sample text.", release_date: "2020-02-13", story_id: story_id)

post = Post.first
post_id = post.id

Comment.create(name: "Generic commenter.", title: "Sample comment.", body: "Sample text.", date: "2020-02-13", post_id: post_id)