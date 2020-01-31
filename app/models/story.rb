class Story < ApplicationRecord
  has_many :posts
  belongs_to :author
  def friendly_release_date
    date = self.release_date
    date_array = date.split(/-/)
    month = ""
    if date_array[1] == "01"
      month = "January"
    elsif date_array[1] == "02"
      month = "February"
    elsif date_array[1] == "03"
      month = "March"
    elsif date_array[1] == "04"
      month = "April"
    elsif date_array[1] == "05"
      month = "May"
    elsif date_array[1] == "06"
      month = "June"
    elsif date_array[1] == "07"
      month = "July"
    elsif date_array[1] == "08"
      month = "August"
    elsif date_array[1] == "09"
      month = "September"
    elsif date_array[1] == "10"
      month = "October"
    elsif date_array[1] == "11"
      month = "November"
    elsif date_array[1] == "12"
      month = "December"
    end
    return "#{month} #{date_array[2]}, #{date_array[0]}"
  end
end
