# SYNC WEBPAGE
aws s3 sync ~/Desktop/PAY2PLAY/pay2play-website s3://pay2play.io --exclude ".git/*" --acl public-read --profile playent

<!-- wget https://playent.s3.amazonaws.com/intaract/setup_1.sh && chmod u+x setup_1.sh && source ./setup_1.sh

ssh -i ~/.ssh/intaract ec2-user@ec2-54-218-99-237.us-west-2.compute.amazonaws.com -->
