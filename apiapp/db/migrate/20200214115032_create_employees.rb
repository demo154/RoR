class CreateEmployees < ActiveRecord::Migration[5.1]
  def change
    create_table :employees do |t|
      t.string :FirstName
      t.string :LastName
      t.string :Email

      t.timestamps
    end
  end
end
