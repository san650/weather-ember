require 'sinatra'

set :public_folder, Proc.new { File.join(root, 'app') }

get '/' do
  File.read('app/index.html')
end
