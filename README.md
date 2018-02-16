# SYNC WEBPAGE
aws s3 sync ~/Desktop/HOSTAPP/PAY2PLAY/website/pay2play s3://pay2play.io --acl public-read --profile playent

<!-- wget https://playent.s3.amazonaws.com/intaract/setup_1.sh && chmod u+x setup_1.sh && source ./setup_1.sh

ssh -i ~/.ssh/intaract ec2-user@ec2-54-218-99-237.us-west-2.compute.amazonaws.com -->
